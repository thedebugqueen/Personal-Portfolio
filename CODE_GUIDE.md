# 💻 KOD REHBERİ: Kendi Sitenizi Yaratın!

Bu rehber, hiç kod bilmeseniz bile sitenizi baştan aşağı nasıl değiştireceğinizi anlatır. 

---
## 🧠 Önce Temeller: Hangi Dosya Ne Yapar?

Bir web sitesi insan vücudu gibidir:

1.  **HTML (`index.html`): İSKELET 🦴**
    *   Sitedeki **yazılar, resimler, başlıklar ve kutular** buradadır.
    *   "Adımı değiştirmek istiyorum", "Resmimi değiştireceğim" diyorsanız buraya bakacaksınız.

2.  **CSS (`style.css`): DERİ ve KIYAFET 🎨**
    *   Sitenin **renkleri, yazı tipleri, gölgeleri ve düzeni** buradadır.
    *   "Mavi rengi pembe yapayım", "Yazılar daha büyük olsun" diyorsanız buraya bakacaksınız.

3.  **JavaScript (`script.js`): KASLAR ve BEYİN 🧠**
    *   Sitenin **hareketleri ve mantığı** buradadır.
    *   "Tıklayınca şu olsun", "Aşağı inince bu gelsin" gibi işleri yapar. (Genellikle buraya dokunmanıza gerek kalmaz).

---

## 🎨 Adım 1: Renkleri ve Tasarımı Değiştirme
**Dosya:** `style.css`

Sitenin tüm renklerini tek bir yerden yönetiyoruz. 
- Dosyanın en başına (**20. satır civarı**) bakın. `:root` yazan yeri bulun.

```css
:root {
    --primary: #2563eb;       /* Ana Renk (Mavi) */
    --accent: #f472b6;        /* Vurgu Rengi (Pembe) */
}
```
*   Sevdiğiniz rengin **HEX kodunu** (örneğin `#ff0000`) bulun ve buradaki kodla değiştirin.

---

## ✏️ Adım 2: İçerikleri Değiştirme (Bölüm Bölüm)
**Dosya:** `index.html`

Aşağıdaki başlıkları `CTRL + F` ile aratarak ilgili yeri hemen bulabilirsiniz.

### 1. Giriş Ekranı (Hero Section)
-   **İsim:** `<h1>` etiketini bulun (76. satır). `Your Name` yerine adınızı yazın.
-   **Unvan:** `<p class="hero-description">` içindeki yazıyı değiştirin.
-   **Fotoğraf:** `src="images/profile.png"` kısmını bulun. Kendi fotoğrafınızın adını buraya yazın (Önce fotoğrafı `images` klasörüne atın!).

### 2. Hakkımda (About Me)
-   **Hikaye:** `<!-- [HİKAYENİZİ BURAYA YAZIN] -->` yorumunu bulun (118. satır). Altındaki İngilizce metni silip kendinizi anlatın.
-   **Yetenekler:** `HTML/CSS` yazan yerleri (132. satır) bulun.
    *   İkon değiştirmek için: `data-lucide="code"` kısmına [Lucide Icons](https://lucide.dev/icons) sitesinden beğendiğiniz ikon adını yazın.

### 3. Deneyim (Experience)
-   `<!-- [DENEYİMLERİNİZİ BURAYA EKLEYİN] -->` diye aratın (185. satır).
-   `timeline-date`: Tarihleri değiştirin (2024 - Present).
-   `timeline-content h4`: Şirket/Okul adını yazın.
-   `timeline-content p`: Yaptığınız işi anlatın.
*   **İpucu:** Yeni bir deneyim eklemek için `<div class="timeline-item">...</div>` bloğunu kopyalayıp altına yapıştırın.

### 4. Araştırma (Research - Opsiyonel)
-   Eğer akademik bir çalışmanız yoksa bu bölümü tamamen silebilirsiniz!
-   Silmek için: `<section class="research-section"...>` satırından başlayıp `</section>` bitişine kadar olan her şeyi seçip silin.

### 5. Projeler (Projects)
-   `<!-- [PROJE 1] -->` diye aratın (319. satır).
-   **Resim:** `src="images/project1.png"` kısmına proje resminizi koyun.
-   **Başlık:** `<h3>Smart Dashboard</h3>` kısmını değiştirin.
-   **Etiketler:** `<span>React</span>` gibi kısımları kullandığınız teknolojilerle değiştirin.

### 6. İletişim (Contact)
-   **Mail:** `mailto:hello@example.com` kısmını kendi mailiniz yapın.
-   **Linkedin:** `href="#"` kısmına kendi LinkedIn profil linkinizi yapıştırın.
-   **Konum:** `New York, USA` yazısını değiştirin.

---
*İyi eğlenceler!* ✨
