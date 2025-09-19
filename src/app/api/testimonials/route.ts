import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    // Read the JSON file from the data directory
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    const fileContents = await fs.readFile(jsonDirectory + '/testimonials.json', 'utf8');
    const testimonialsData = JSON.parse(fileContents);
    
    return NextResponse.json(testimonialsData);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const newTestimonial = await request.json();
    
    // Read current testimonials
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    const fileContents = await fs.readFile(jsonDirectory + '/testimonials.json', 'utf8');
    const testimonialsData = JSON.parse(fileContents);
    
    // Add new testimonial with ID
    const testimonialWithId = {
      ...newTestimonial,
      id: Math.max(...testimonialsData.map((t: any) => t.id), 0) + 1,
    };
    
    testimonialsData.push(testimonialWithId);
    
    // Write back to file
    await fs.writeFile(
      jsonDirectory + '/testimonials.json', 
      JSON.stringify(testimonialsData, null, 2)
    );
    
    return NextResponse.json(testimonialWithId, { status: 201 });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json(
      { error: 'Failed to create testimonial' },
      { status: 500 }
    );
  }
}