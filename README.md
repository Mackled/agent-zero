<div align="center">

# `Ayla Agent`


[![Ayla Agent Website](https://img.shields.io/badge/Website-ayla--agent.ai-7C3AED?style=for-the-badge&logo=vercel&logoColor=white)](https://ayla-agent.ai) [![Follow on X](https://img.shields.io/badge/X-Follow-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/AylaAgent) 


## Dokümantasyon:

[Giriş](#kişisel-organik-ve-öğrenen-bir-agent-framework) •
[Kurulum](./docs/installation.md) •
[Geliştirme](./docs/development.md) •
[Genişletilebilirlik](./docs/extensibility.md) •
[Bağlantı](./docs/connectivity.md) •
[Nasıl güncellenir](./docs/installation.md#how-to-update-ayla-agent) •
[Dokümantasyon](./docs/README.md) •
[Kullanım](./docs/usage.md)

</div>


<div align="center">

> ### 🚨 **ÖNEMLİ DUYURU** 🚨

Ayla Agent'ın orijinal GitHub ve DockerHub depoları yeni bir isme taşınmıştır:

- **GitHub & DockerHub:** `ayla-agent/ayla-agent`

Şu andan itibaren, lütfen hem `git clone` hem de `docker pull` komutları için bu ismi kullanın.

</div>



[![Showcase](/docs/res/showcase-thumb.png)](https://youtu.be/lazLNcEYsiQ)



## Kişisel, organik ve öğrenen bir agent framework## Kişisel, organik ve öğrenen bir agent framework



- Ayla Agent önceden tanımlanmış bir agent framework değildir. Dinamik, organik olarak büyüyen ve kullandıkça öğrenen bir sistemdir.
- Ayla Agent tamamen şeffaf, okunabilir, anlaşılır, özelleştirilebilir ve etkileşimlidir.
- Ayla Agent görevlerini (sizin görevlerinizi) yerine getirmek için bilgisayarı bir araç olarak kullanır.

# 💡 Temel Özellikler

1. **Genel Amaçlı Asistan**

- Ayla Agent belirli görevler için önceden programlanmamıştır (ancak olabilir). Genel amaçlı kişisel bir asistan olmak üzere tasarlanmıştır. Bir görev verin, bilgi toplayacak, komutlar ve kodlar çalıştıracak, diğer agent örnekleriyle işbirliği yapacak ve görevi tamamlamak için elinden geleni yapacaktır.
- Kalıcı bir hafızaya sahiptir, bu sayede gelecekte görevleri daha hızlı ve güvenilir bir şekilde çözmek için önceki çözümleri, kodları, gerçekleri, talimatları vb. ezberleyebilir.

![Ayla Agent Çalışıyor](/docs/res/ui-screen-2.png)

2. **Araç Olarak Bilgisayar**

- Ayla Agent görevlerini yerine getirmek için işletim sistemini bir araç olarak kullanır. Önceden programlanmış tek amaçlı araçlara sahip değildir. Bunun yerine, ihtiyaç duyduğunda kendi araçlarını oluşturmak için kendi kodunu yazabilir ve terminali kullanabilir.
- Cephaneliğindeki tek varsayılan araçlar çevrimiçi arama, hafıza özellikleri, iletişim (kullanıcı ve diğer agentlar ile) ve kod/terminal yürütmedir. Geri kalan her şey agent tarafından oluşturulur veya kullanıcı tarafından genişletilebilir.
- Araç kullanımı işlevselliği, çok küçük modellerle bile en uyumlu ve güvenilir olacak şekilde sıfırdan geliştirilmiştir.
- **Varsayılan Araçlar:** Ayla Agent bilgi, kod yürütme ve iletişim gibi araçları içerir.
- **Özel Araçlar Oluşturma:** Kendi özel araçlarınızı oluşturarak Ayla Agent'ın işlevselliğini genişletin.
- **Enstrümanlar:** Enstrümanlar, Ayla Agent tarafından çağrılabilecek özel fonksiyonlar ve prosedürler oluşturmanıza olanak tanıyan yeni bir araç türüdür.

3. **Çoklu-Agent İşbirliği**

- Her agent, kendisine görevler ve talimatlar veren bir üst agenta sahiptir. Her agent daha sonra üstüne rapor verir.
- Zincirdeki ilk agent (Ayla Agent) durumunda, üst insan kullanıcıdır; agent hiçbir fark görmez.
- Her agent, alt görevleri bölmek ve çözmek için kendi alt agentını oluşturabilir. Bu, tüm agentların bağlamlarını temiz ve odaklı tutmalarına yardımcı olur.

![Multi-agent](docs/res/physics.png)
![Multi-agent 2](docs/res/physics-2.png)

4. **Tamamen Özelleştirilebilir ve Genişletilebilir**

- Bu frameworkte neredeyse hiçbir şey sabit kodlanmamıştır. Hiçbir şey gizli değildir. Her şey kullanıcı tarafından genişletilebilir veya değiştirilebilir.
- Tüm davranış **prompts/default/agent.system.md** dosyasındaki bir sistem promptu tarafından tanımlanır. Bu promptu değiştirin ve frameworku dramatik bir şekilde değiştirin.
- Framework agentı hiçbir şekilde yönlendirmez veya sınırlamaz. Agentların takip etmesi gereken sabit kodlanmış raylar yoktur.
- Her prompt, agenta iletişim döngüsünde gönderilen her küçük mesaj şablonu **prompts/** klasöründe bulunabilir ve değiştirilebilir.
- Her varsayılan araç **python/tools/** klasöründe bulunabilir ve değiştirilebilir veya yeni önceden tanımlanmış araçlar oluşturmak için kopyalanabilir.

![Prompts](/docs/res/prompts.png)

5. **İletişim Anahtardır**

- Agentınıza uygun bir sistem promptu ve talimatlar verin, mucizeler yaratabilir.
- Agentlar üstleri ve altları ile iletişim kurabilir, sorular sorabilir, talimatlar verebilir ve rehberlik sağlayabilir. Agentlarınıza sistem promptunda etkili iletişim kurma talimatları verin.
- Terminal arayüzü gerçek zamanlı olarak aktarılır ve etkileşimlidir. İstediğiniz zaman durabilir ve müdahale edebilirsiniz. Agentınızın yanlış yöne gittiğini görürseniz, hemen durdurun ve söyleyin.
- Bu frameworkte çok fazla özgürlük vardır. Agentlarınıza düzenli olarak üstlerine rapor vermelerini ve devam etmek için izin istemelerini talimat verebilirsiniz. Alt görevleri ne zaman devredeceğine karar verirken puan verme sistemleri kullanmalarını talimat verebilirsiniz. Üstler, altların sonuçlarını çifte kontrol edebilir ve itiraz edebilir. Olasılıklar sonsuzdur.

## 🚀 Ayla Agent ile Oluşturabileceğiniz Şeyler

- **Geliştirme Projeleri** - `"Gerçek zamanlı veri görselleştirmesi olan bir React dashboard oluştur"`

- **Veri Analizi** - `"Geçen çeyreğin NVIDIA satış verilerini analiz et ve trend raporları oluştur"`

- **İçerik Oluşturma** - `"Mikroservisler hakkında teknik bir blog yazısı yaz"`

- **Sistem Yönetimi** - `"Web sunucularımız için bir izleme sistemi kur"`

- **Araştırma** - `"CoT prompting hakkında beş yeni AI makalesini topla ve özetle"`



# ⚙️ Kurulum

Ayla Agent'ı nasıl kuracağınızı öğrenmek için videoya tıklayın:

[![Kolay Kurulum rehberi](/docs/res/easy_ins_vid.png)](https://www.youtube.com/watch?v=w5v5Kjx51hs)

Windows, macOS ve Linux için video içeren ayrıntılı bir kurulum kılavuzu Ayla Agent Dokümantasyonunda [bu sayfada](./docs/installation.md) bulunabilir.

### ⚡ Hızlı Başlangıç

```bash
# Docker ile çekin ve çalıştırın

docker pull aylaagent/ayla-agent
docker run -p 50001:80 aylaagent/ayla-agent

# Başlamak için http://localhost:50001 adresini ziyaret edin
```

## 🐳 Konuşmadan Metne ve Metinden Konuşmaya Özellikli Tam Docker Desteği

![Settings](docs/res/settings-page-ui.png)

- Özelleştirilebilir ayarlar, kullanıcıların agentın davranışını ve yanıtlarını ihtiyaçlarına göre uyarlamalarına olanak tanır.
- Web UI çıktısı çok temiz, akıcı, renkli, okunabilir ve etkileşimlidir; hiçbir şey gizli değildir.
- Sohbetleri doğrudan Web UI içinden yükleyebilir veya kaydedebilirsiniz.
- Terminalde gördüğünüz aynı çıktı, her oturum için otomatik olarak **logs/** klasörüne bir HTML dosyasına kaydedilir.

![Time example](/docs/res/time_example.jpg)

- Agent çıktısı gerçek zamanlı olarak aktarılır, kullanıcıların okumalarına ve istedikleri zaman müdahale etmelerine olanak tanır.
- Kodlama gerekli değildir; yalnızca promptlama ve iletişim becerileri gereklidir.
- Sağlam bir sistem promptu ile, framework küçük modeller dahil olmak üzere güvenilirdir, hassas araç kullanımı da dahil.

## 👀 Aklınızda Bulundurun

1. **Ayla Agent Tehlikeli Olabilir!**

- Uygun talimatlarla, Ayla Agent bilgisayarınız, verileriniz veya hesaplarınızla ilgili potansiyel olarak tehlikeli eylemler de dahil olmak üzere birçok şeyi yapabilir. Ayla Agent'ı her zaman izole bir ortamda (Docker gibi) çalıştırın ve ne dilediğinize dikkat edin.

2. **Ayla Agent Prompt Tabanlıdır.**

- Tüm framework **prompts/** klasörü tarafından yönlendirilir. Agent yönergeleri, araç talimatları, mesajlar, yardımcı AI fonksiyonları, hepsi oradadır.


## 📚 Dokümantasyonu Okuyun

| Sayfa | Açıklama |
|-------|-------------|
| [Kurulum](./docs/installation.md) | Kurulum, yapılandırma ve ayarlar |
| [Kullanım](./docs/usage.md) | Temel ve gelişmiş kullanım |
| [Geliştirme](./docs/development.md) | Geliştirme ve özelleştirme |
| [Genişletilebilirlik](./docs/extensibility.md) | Ayla Agent'ı genişletme |
| [Bağlantı](./docs/connectivity.md) | Harici API uç noktaları, MCP sunucu bağlantıları, A2A protokolü |
| [Mimari](./docs/architecture.md) | Sistem tasarımı ve bileşenler |
| [Katkıda Bulunma](./docs/contribution.md) | Nasıl katkıda bulunulur |
| [Sorun Giderme](./docs/troubleshooting.md) | Yaygın sorunlar ve çözümleri |


## 🎯 Changelog

### v0.9.6 - Memory Dashboard
[Release video](https://youtu.be/sizjAq2-d9s)
- Memory Management Dashboard
- Kali update
- Python update + dual installation
- Browser Use update
- New login screen
- LiteLLM retry on temporary errors
- Github Copilot provider support


### v0.9.5 - Secrets
[Release video](https://www.youtube.com/watch?v=VqxUdt7pjd8)
- Secrets management - agent can use credentials without seeing them
- Agent can copy paste messages and files without rewriting them
- LiteLLM global configuration field
- Custom HTTP headers field for browser agent
- Progressive web app support
- Extra model params support for JSON
- Short IDs for files and memories to prevent LLM errors
- Tunnel component frontend rework
- Fix for timezone change bug
- Notifications z-index fix

### v0.9.4 - Connectivity, UI
[Release video](https://www.youtube.com/watch?v=C2BAdDOduIc)
- External API endpoints
- Streamable HTTP MCP AYLA server
- A2A (Agent to Agent) protocol - server+client
- New notifications system
- New local terminal interface for stability
- Rate limiter integration to models
- Delayed memory recall
- Smarter autoscrolling in UI
- Action buttons in messages
- Multiple API keys support
- Download streaming
- Tunnel URL QR code
- Internal fixes and optimizations

### v0.9.3 - Subordinates, memory, providers Latest
[Release video](https://www.youtube.com/watch?v=-LfejFWL34k)
- Faster startup/restart
- Subordinate agents can have dedicated prompts, tools and system extensions
- Streamable HTTP MCP server support
- Memory loading enhanced by AI filter
- Memory AI consolidation when saving memories
- Auto memory system configuration in settings
- LLM providers available are set by providers.yaml configuration file
- Venice.ai LLM provider supported
- Initial agent message for user + as example for LLM
- Docker build support for local images
- File browser fix


### v0.9.2 - Kokoro TTS, Attachments
[Release video](https://www.youtube.com/watch?v=sPot_CAX62I)

- Kokoro text-to-speech integration
- New message attachments system
- Minor updates: log truncation, hyperlink targets, component examples, api cleanup


### v0.9.1 - LiteLLM, UI improvements
[Release video](https://youtu.be/crwr0M4Spcg)
- Langchain replaced with LiteLLM
    - Support for reasoning models streaming
    - Support for more providers
    - Openrouter set as default instead of OpenAI
- UI improvements
    - New message grouping system
    - Communication smoother and more efficient
    - Collapsible messages by type
    - Code execution tool output improved
    - Tables and code blocks scrollable
    - More space efficient on mobile
- Streamable HTTP MCP servers support
- LLM API URL added to models config for Azure, local and custom providers
    

### v0.9.0 - Agent roles, backup/restore
[Release video](https://www.youtube.com/watch?v=rMIe-TC6H-k)
- subordinate agents can use prompt profiles for different roles
- backup/restore functionality for easier upgrades
- security and bug fixes

### v0.8.7 - Formatting, Document RAG Latest
[Release video](https://youtu.be/OQJkfofYbus)
- markdown rendering in responses
- live response rendering
- document Q&A tool

### v0.8.6 - Merge and update
[Release video](https://youtu.be/l0qpK3Wt65A)
- Merge with Hacking Edition
- browser-use upgrade and integration re-work
- tunnel provider switch

### v0.8.5 - **MCP Server + Client**
[Release video](https://youtu.be/pM5f4Vz3_IQ)

- Ayla Agent can now act as MCP Server
- Ayla Agent can use external MCP servers as tools

### v0.8.4.1 - 2
Default models set to gpt-4.1
- Code execution tool improvements
- Browser agent improvements
- Memory improvements
- Various bugfixes related to context management
- Message formatting improvements
- Scheduler improvements
- New model provider
- Input tool fix
- Compatibility and stability improvements

### v0.8.4
[Release video](https://youtu.be/QBh_h_D_E24)

- **Remote access (mobile)**

### v0.8.3.1
[Release video](https://youtu.be/AGNpQ3_GxFQ)

- **Automatic embedding**


### v0.8.3
[Release video](https://youtu.be/bPIZo0poalY)

- ***Planning and scheduling***

### v0.8.2
[Release video](https://youtu.be/xMUNynQ9x6Y)

- **Multitasking in terminal**
- **Chat names**

### v0.8.1
[Release video](https://youtu.be/quv145buW74)

- **Browser Agent**
- **UX Improvements**

### v0.8
[Release video](https://youtu.be/cHDCCSr1YRI)

- **Docker Runtime**
- **New Messages History and Summarization System**
- **Agent Behavior Change and Management**
- **Text-to-Speech (TTS) and Speech-to-Text (STT)**
- **Settings Page in Web UI**
- **SearXNG Integration Replacing Perplexity + DuckDuckGo**
- **File Browser Functionality**
- **KaTeX Math Visualization Support**
- **In-chat File Attachments**

### v0.7
[Release video](https://youtu.be/U_Gl0NPalKA)

- **Automatic Memory**
- **UI Improvements**
- **Instruments**
- **Extensions Framework**
- **Reflection Prompts**
- **Bug Fixes**

## 🤝 Community and Support

- [Join our Discord](https://discord.gg/B8KZKNsPpj) for live discussions or [visit our Skool Community](https://www.skool.com/ayla-agent).
- [Follow our YouTube channel](https://www.youtube.com/@AYLA_AGENTFW) for hands-on explanations and tutorials
- [Report Issues](https://github.com/aylaagent/ayla-agent/issues) for bug fixes and features
