import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    // Read the JSON file from the data directory
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    const fileContents = await fs.readFile(jsonDirectory + '/gallery.json', 'utf8');
    const galleryData = JSON.parse(fileContents);
    
    return NextResponse.json(galleryData);
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const newAlbum = await request.json();
    
    // Read current gallery data
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    const fileContents = await fs.readFile(jsonDirectory + '/gallery.json', 'utf8');
    const galleryData = JSON.parse(fileContents);
    
    // Add new album with ID
    const albumWithId = {
      ...newAlbum,
      id: Math.max(...galleryData.map((a: any) => a.id), 0) + 1,
    };
    
    galleryData.push(albumWithId);
    
    // Write back to file
    await fs.writeFile(
      jsonDirectory + '/gallery.json', 
      JSON.stringify(galleryData, null, 2)
    );
    
    return NextResponse.json(albumWithId, { status: 201 });
  } catch (error) {
    console.error('Error creating gallery album:', error);
    return NextResponse.json(
      { error: 'Failed to create gallery album' },
      { status: 500 }
    );
  }
}