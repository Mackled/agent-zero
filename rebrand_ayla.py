# -*- coding: utf-8 -*-
"""
Ayla Agent Rebranding Script
Bu script tüm proje dosyalarında "Ayla Agent" referanslarını "Ayla Agent" ile değiştirir.
"""

import os
import re
from pathlib import Path

def replace_in_file(file_path, replacements):
    """Bir dosyadaki tüm eşleşmeleri değiştirir."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Tüm değiştirmeleri uygula
        for old, new in replacements.items():
            content = re.sub(old, new, content, flags=re.IGNORECASE)
        
        # Eğer değişiklik olduysa dosyayı kaydet
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Hata: {file_path} - {str(e)}")
        return False

def main():
    """Ana fonksiyon"""
    # Değiştirilecek kelimeler
    replacements = {
        r'Ayla Agent': 'Ayla Agent',
        r'Ayla Agent': 'ayla agent',
        r'ayla-agent': 'ayla-agent',
        r'ayla_agent': 'ayla_agent',
        r'AGENT.?ZERO': 'AYLA_AGENT',
        r'Ayla Agent': 'Ayla Agent',
        r'Ayla Agent': 'ayla agent',
        r'AYLA_AGENT': 'AylaAgent',
        r'AYLA_AGENT': 'aylaagent',
        r'aylaagent': 'aylaagent',
        r'/ayla': '/ayla',
        r'AYLA': 'AYLA',
        r'AYLA': 'ayla',
    }
    
    # Kontrol edilecek dosya uzantıları
    extensions = ['.py', '.md', '.txt', '.html', '.js', '.css', '.json', '.yml', '.yaml', '.sh']
    
    # Proje kök dizini
    root_dir = Path(r'D:\AppEnv\Ayla-Zero\ayla-agent')
    
    # Hariç tutulacak dizinler
    exclude_dirs = {'__pycache__', '.git', 'node_modules', 'vendor', 'venv', '.venv'}
    
    changed_files = 0
    total_files = 0
    
    print("Ayla Agent Rebranding Scripti Başlatılıyor...")
    print(f"Dizin: {root_dir}")
    print("-" * 60)
    
    # Tüm dosyaları tara
    for file_path in root_dir.rglob('*'):
        # Dizin kontrolü
        if any(excluded in file_path.parts for excluded in exclude_dirs):
            continue
            
        # Dosya uzantısı kontrolü
        if file_path.is_file() and file_path.suffix in extensions:
            total_files += 1
            if replace_in_file(file_path, replacements):
                changed_files += 1
                print(f"✓ Güncellendi: {file_path.relative_to(root_dir)}")
    
    print("-" * 60)
    print(f"\nTamamlandı!")
    print(f"Toplam kontrol edilen dosya: {total_files}")
    print(f"Güncellenen dosya: {changed_files}")

if __name__ == "__main__":
    main()
