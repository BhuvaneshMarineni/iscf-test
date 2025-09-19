import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id);
    
    // Read current gallery data
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    const fileContents = await fs.readFile(jsonDirectory + '/gallery.json', 'utf8');
    const galleryData = JSON.parse(fileContents);
    
    // Filter out the album to delete
    const updatedGallery = galleryData.filter((album: any) => album.id !== id);
    
    // Write back to file
    await fs.writeFile(
      jsonDirectory + '/gallery.json', 
      JSON.stringify(updatedGallery, null, 2)
    );
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting gallery album:', error);
    return NextResponse.json(
      { error: 'Failed to delete gallery album' },
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
    
    // Read current gallery data
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    const fileContents = await fs.readFile(jsonDirectory + '/gallery.json', 'utf8');
    const galleryData = JSON.parse(fileContents);
    
    // Update the album
    const updatedGallery = galleryData.map((album: any) => 
      album.id === id ? { ...album, ...updates } : album
    );
    
    // Write back to file
    await fs.writeFile(
      jsonDirectory + '/gallery.json', 
      JSON.stringify(updatedGallery, null, 2)
    );
    
    const updatedAlbum = updatedGallery.find((album: any) => album.id === id);
    return NextResponse.json(updatedAlbum);
  } catch (error) {
    console.error('Error updating gallery album:', error);
    return NextResponse.json(
      { error: 'Failed to update gallery album' },
      { status: 500 }
    );
  }
}