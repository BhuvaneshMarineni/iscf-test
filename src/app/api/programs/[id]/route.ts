import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    // Read current programs
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    const fileContents = await fs.readFile(jsonDirectory + '/programs.json', 'utf8');
    const programsData = JSON.parse(fileContents);
    
    // Filter out the program to delete
    const updatedPrograms = programsData.filter((program: any) => program.id !== id);
    
    // Write back to file
    await fs.writeFile(
      jsonDirectory + '/programs.json', 
      JSON.stringify(updatedPrograms, null, 2)
    );
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting program:', error);
    return NextResponse.json(
      { error: 'Failed to delete program' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    const updates = await request.json();
    
    // Read current programs
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    const fileContents = await fs.readFile(jsonDirectory + '/programs.json', 'utf8');
    const programsData = JSON.parse(fileContents);
    
    // Update the program
    const updatedPrograms = programsData.map((program: any) => 
      program.id === id ? { ...program, ...updates } : program
    );
    
    // Write back to file
    await fs.writeFile(
      jsonDirectory + '/programs.json', 
      JSON.stringify(updatedPrograms, null, 2)
    );
    
    const updatedProgram = updatedPrograms.find((program: any) => program.id === id);
    return NextResponse.json(updatedProgram);
  } catch (error) {
    console.error('Error updating program:', error);
    return NextResponse.json(
      { error: 'Failed to update program' },
      { status: 500 }
    );
  }
}