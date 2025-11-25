from rembg import remove
from PIL import Image
import io

input_path = 'public/DMA_LOGO.png'
output_path = 'public/logo-transparent.webp'

with open(input_path, 'rb') as i:
    input_data = i.read()
    output_data = remove(input_data)
    
    # Save as WebP
    img = Image.open(io.BytesIO(output_data))
    img.save(output_path, format='WEBP')

print(f"Background removed and saved to {output_path}")
