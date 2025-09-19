import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    // Read current events
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    const fileContents = await fs.readFile(jsonDirectory + '/events.json', 'utf8');
    const eventsData = JSON.parse(fileContents);
    
    // Filter out the event to delete
    const updatedEvents = eventsData.filter((event: any) => event.id !== id);
    
    // Write back to file
    await fs.writeFile(
      jsonDirectory + '/events.json', 
      JSON.stringify(updatedEvents, null, 2)
    );
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting event:', error);
    return NextResponse.json(
      { error: 'Failed to delete event' },
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
    
    // Read current events
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    const fileContents = await fs.readFile(jsonDirectory + '/events.json', 'utf8');
    const eventsData = JSON.parse(fileContents);
    
    // Update the event
    const updatedEvents = eventsData.map((event: any) => 
      event.id === id ? { ...event, ...updates } : event
    );
    
    // Write back to file
    await fs.writeFile(
      jsonDirectory + '/events.json', 
      JSON.stringify(updatedEvents, null, 2)
    );
    
    const updatedEvent = updatedEvents.find((event: any) => event.id === id);
    return NextResponse.json(updatedEvent);
  } catch (error) {
    console.error('Error updating event:', error);
    return NextResponse.json(
      { error: 'Failed to update event' },
      { status: 500 }
    );
  }
}