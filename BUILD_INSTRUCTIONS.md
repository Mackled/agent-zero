# Ayla Agent - Build ve Kurulum Rehberi

## 🚀 Hızlı Başlangıç

### Docker ile Çalıştırma (Önerilen)

#### Ön Gereksinimler
- Docker Desktop kurulu olmalı
- En az 4GB RAM
- 10GB boş disk alanı

#### Adımlar

1. **Projeyi klonlayın:**
```bash
cd D:\AppEnv\Ayla-Zero\agent-zero
```

2. **Docker Image Build:**
```bash
docker build -f DockerfileLocal -t aylaagent/ayla-agent:latest .
```

3. **Container'ı başlatın:**
```bash
docker run -p 50001:80 -m 2g aylaagent/ayla-agent:latest
```

VEYA

**Docker Compose ile:**
```bash
docker-compose up -d
```

4. **Tarayıcıda açın:**
```
http://localhost:50001
```

### Manuel Kurulum (Geliştirme için)

#### Gereksinimler
- Python 3.10+
- Node.js 18+
- pip

#### Adımlar

1. **Bağımlılıkları yükleyin:**
```bash
pip install -r requirements.txt
```

2. **Uygulamayı başlatın:**
```bash
python run_ui.py
```

3. **Tarayıcıda açın:**
```
http://localhost:50001
```

## 🎨 Özellikler

### Glassmorphism Tasarım
- Modern, şeffaf paneller
- Backdrop blur efektleri
- Gradient backgrounds
- Smooth animations
- Glow efektleri

### Türkçe Dil Desteği
- Tamamen Türkçe arayüz
- Menüler ve butonlar
- Ayarlar sayfası
- Hata mesajları

### Ayla Brand Colors
- **Primary:** #7C3AED (Mor)
- **Secondary:** #EC4899 (Pembe)
- **Accent:** #10B981 (Yeşil)

## 🐳 Docker Yapılandırması

### docker-compose.yml
```yaml
version: '3.8'
services:
  ayla-agent:
    image: aylaagent/ayla-agent:latest
    container_name: ayla-agent
    ports:
      - "50001:80"
    mem_limit: 2g
    mem_reservation: 1g
    cpus: 2
    restart: unless-stopped
    volumes:
      - ayla-data:/data
      - ayla-logs:/logs
      - ayla-memory:/memory
      - ayla-knowledge:/knowledge
```

### Hafıza Limitleri
- **RAM Limit:** 2GB
- **CPU Limit:** 2 core
- **Disk:** Volume tabanlı

## 📝 Yapılandırma

### Ortam Değişkenleri

`.env` dosyası oluşturun:
```env
# API Keys
OPENAI_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here

# Database
DB_PATH=/data/ayla.db

# Memory
MEMORY_PATH=/memory

# Knowledge
KNOWLEDGE_PATH=/knowledge

# Server
PORT=50001
HOST=0.0.0.0
```

## 🔧 Sorun Giderme

### Port Zaten Kullanılıyor
```bash
# Başka bir port kullanın
docker run -p 50002:80 -m 2g aylaagent/ayla-agent:latest
```

### Bellek Hatası
```bash
# Docker Desktop'ta RAM limitini artırın
# Settings > Resources > Memory > 4GB+
```

### Build Hatası
```bash
# Cache'i temizleyin
docker system prune -a
docker build --no-cache -f DockerfileLocal -t aylaagent/ayla-agent:latest .
```

## 📚 Dokümantasyon

- [README.md](./README.md) - Genel bakış
- [REBRANDING_SUMMARY.md](./REBRANDING_SUMMARY.md) - Değişiklik özeti
- [docs/](./docs/) - Detaylı dokümantasyon

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit yapın (`git commit -m 'Add some AmazingFeature'`)
4. Push yapın (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📄 Lisans

Bu proje orijinal Agent Zero lisansı altındadır.

## 🙏 Teşekkürler

- Orijinal Agent Zero projesi
- Tüm katkıda bulunanlar
- Ayla Agent topluluğu

---

**Versiyon:** Ayla Agent v1.0.0
**Son Güncelleme:** 2025-01-26
**Destek:** https://github.com/aylaagent/ayla-agent

---

## 🎯 Test Checklist

Kurulumdan sonra test edin:

- [ ] Ana sayfa yükleniyor
- [ ] Glassmorphism efektleri çalışıyor
- [ ] Türkçe metinler görünüyor
- [ ] Sohbet başlatılabiliyor
- [ ] Ayarlar sayfası açılıyor
- [ ] Login sayfası çalışıyor
- [ ] Responsive tasarım çalışıyor
- [ ] Dark/Light mode geçişi çalışıyor
- [ ] Animasyonlar smooth
- [ ] Bellek kullanımı <2GB

## 🚨 Önemli Notlar

1. **İlk Çalıştırma:** İlk build 10-15 dakika sürebilir
2. **RAM:** En az 4GB sistem RAM'i önerilir
3. **Tarayıcı:** Chrome/Edge/Firefox güncel sürüm
4. **Docker:** Docker Desktop güncel sürüm

## 📞 İletişim

- GitHub: https://github.com/aylaagent/ayla-agent
- Issues: https://github.com/aylaagent/ayla-agent/issues

---

**Başarılı bir build diliyoruz! 🎉**
