import pdfplumber
import json
import re

pdf_path = r"c:\Users\91982\Desktop\itsa website\2024-25_Odd_GHRCEM Pune ITSA Magazine.pdf"

try:
    with pdfplumber.open(pdf_path) as pdf:
        full_text = ""
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            if text:
                full_text += text + "\n\n"
        
        # Save to file with error handling
        with open("magazine_content.txt", "w", encoding="utf-8", errors="ignore") as f:
            f.write(full_text)
        
        print("Content extracted successfully!")
        print("Saved to magazine_content.txt")
        
except Exception as e:
    print(f"Error: {e}")
