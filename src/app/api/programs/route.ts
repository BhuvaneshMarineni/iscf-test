import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    // Read the JSON file from the data directory
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    const fileContents = await fs.readFile(jsonDirectory + '/programs.json', 'utf8');
    const programsData = JSON.parse(fileContents);
    
    return NextResponse.json(programsData);
  } catch (error) {
    console.error('Error fetching programs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch programs' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const newProgram = await request.json();
    
    // Read current programs
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    const fileContents = await fs.readFile(jsonDirectory + '/programs.json', 'utf8');
    const programsData = JSON.parse(fileContents);
    
    // Add new program with ID
    const programWithId = {
      ...newProgram,
      id: Math.max(...programsData.map((p: any) => p.id), 0) + 1,
      currentParticipants: 0
    };
    
    programsData.push(programWithId);
    
    // Write back to file
    await fs.writeFile(
      jsonDirectory + '/programs.json', 
      JSON.stringify(programsData, null, 2)
    );
    
    return NextResponse.json(programWithId, { status: 201 });
  } catch (error) {
    console.error('Error creating program:', error);
    return NextResponse.json(
      { error: 'Failed to create program' },
      { status: 500 }
    );
  }
}