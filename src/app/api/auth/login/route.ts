import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    
    // Read admin credentials from JSON file
    const jsonDirectory = path.join(process.cwd(), 'src/data');
    const fileContents = await fs.readFile(jsonDirectory + '/admin-creds.json', 'utf8');
    const adminCreds = JSON.parse(fileContents);
    
    // Find matching user
    const user = adminCreds.find((cred: any) => 
      cred.email === email && cred.password === password
    );
    
    if (user) {
      // Remove password from response
      const { password: _, ...userWithoutPassword } = user;
      return NextResponse.json({ 
        success: true, 
        user: userWithoutPassword 
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}