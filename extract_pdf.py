import PyPDF2
import os

def extract_text_from_pdf(pdf_path, output_path):
    try:
        with open(pdf_path, 'rb') as file:
            reader = PyPDF2.PdfReader(file)
            text = ""
            for page in reader.pages:
                text += page.extract_text() + "\n"
            
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Successfully extracted text to {output_path}")
    except Exception as e:
        print(f"Error extracting text: {e}")

if __name__ == "__main__":
    pdf_file = "Magnite - DV+ Certification Glossary - 2022.pdf"
    output_file = "pdf_content.txt"
    extract_text_from_pdf(pdf_file, output_file)
