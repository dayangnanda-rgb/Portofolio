(function () {
  "use strict";

  const translations = {
    id: {
      pageTitle: "Dayang Nanda — Web Developer",
      title: "Dayang Nanda — Web Developer",
      description: "Portofolio Dayang Nanda — web developer yang merancang pengalaman digital sederhana dan bermakna.",
      navAbout: "Tentang",
      navWork: "Portfolio",
      navCertificates: "Sertifikat",
      navActivities: "Kegiatan",
      navContact: "Hubungi saya",
      heroStatus: "TERBUKA UNTUK PELUANG BARU",
      heroHello: "Halo, saya",
      heroBeforeRole: "Saya seorang",
      heroRoles: "IT & Application Support, System Analyst, dan Web Developer",
      heroDescription: "yang senang mengubah ide menjadi pengalaman digital yang terasa sederhana, berguna, dan berkesan.",
      heroWorkButton: "Lihat karya saya",
      heroContactButton: "Mari berkenalan",
      heroLocation: "Berbasis di Indonesia",
      heroRemote: "bekerja dari mana saja",
      stripOne: "MERANCANG DENGAN TUJUAN",
      stripTwo: "MEMBANGUN DENGAN LOGIKA",
      stripThree: "BERTUMBUH MELALUI PROSES",
      sectionAbout: "TENTANG SAYA",
      aboutTitleOne: "Teknologi yang baik",
      aboutTitleTwo: "dimulai dari rasa ingin tahu.",
      aboutCopy: "Saya menikmati proses merancang dan membangun website—dari memahami masalah, menyusun tampilan, sampai memastikan semuanya bekerja dengan baik di berbagai perangkat. Buat saya, detail kecil bisa membuat perbedaan besar.",
      toolboxTitle: "YANG SAYA KERJAKAN",
      educationTitle: "RIWAYAT PENDIDIKAN",
      educationType: "PENDIDIKAN",
      educationDegree: "Sarjana Sistem Informasi (S.Kom.)",
      educationPlace: "Universitas Mercu Buana Yogyakarta",
      internshipTitle: "PENGALAMAN MAGANG",
      internshipOneType: "MAGANG · 2025–2026",
      internshipOneRole: "Penata Kelola Sistem dan Teknologi Informasi",
      internshipOnePlace: "Kementerian Koordinator Bidang Pembangunan Manusia dan Kebudayaan (Kemenko PMK)",
      internshipOneNote: "Program pemagangan lulusan perguruan tinggi dengan predikat Sangat Baik.",
      internshipTwoType: "MAGANG · 2024",
      internshipTwoRole: "Divisi Pengembangan Komunikasi Publik",
      internshipTwoPlace: "Dinas Komunikasi, Informatika, Statistik, dan Persandian Kota Semarang",
      sectionWork: "Portfolio",
      workTitleOne: "Beberapa hal yang",
      workTitleTwo: "saya buat.",
      workIntro: "Eksplorasi kecil dan proyek digital yang dirancang dengan rasa ingin tahu.",
      projectOneTitle: "Portal Program Kerja PKPT",
      projectOneDescription: "Pengelolaan dan pemantauan program kerja tahunan.",
      projectTwoTitle: "Dashboard Kinerja PKPT",
      projectTwoDescription: "Ringkasan capaian kinerja dan anggaran program.",
      capturesTitle: "Cuplikan proyek",
      capturesDescription: "Tampilan dan detail dari beberapa karya.",
      captureOne: "Login Portal PKPT",
      captureTwo: "Komitmen Penugasan",
      captureThree: "Tambah Program Kerja",
      workFootnote: "Cuplikan dari Portal Program Kerja Pengawasan Tahunan (PKPT).",
      sectionCertificates: "SERTIFIKAT",
      certificateTitleOne: "Belajar, lalu",
      certificateTitleTwo: "bertumbuh.",
      certificateDescription: "Sertifikat dan pencapaian yang mendukung perjalanan saya.",
      sectionActivities: "KEGIATAN",
      activityTitleOne: "Belajar lewat",
      activityTitleTwo: "pengalaman.",
      activityDescription: "Dokumentasi kegiatan, kolaborasi, dan pengalaman yang berkesan.",
      footerContactTitle: "Hubungi Saya",
      footerSkillsTitle: "Bidang Keahlian",
      footerLinksTitle: "Tautan",
      footerHome: "Beranda",
      footerAbout: "Tentang Saya",
      footerWork: "Portfolio",
      footerCertificates: "Sertifikat",
      footerActivities: "Kegiatan",
      footerContact: "Kontak",
      footerSocialLabel: "SOSIAL MEDIA & KONTAK",
      footerMadeBy: "Dibuat oleh",
      footerBuiltWith: "menggunakan",
      openMenu: "Buka menu navigasi",
      closeMenu: "Tutup menu navigasi",
      closePreview: "Tutup pratinjau",
      dialogLabel: "Pratinjau gambar",
      heroImageAlt: "Foto profil Dayang Nandasari"
    },
    en: {
      pageTitle: "Dayang Nanda — Web Developer",
      title: "Dayang Nanda — Web Developer",
      description: "Dayang Nanda's portfolio — a web developer creating simple and meaningful digital experiences.",
      navAbout: "About",
      navWork: "Portfolio",
      navCertificates: "Certificates",
      navActivities: "Activities",
      navContact: "Contact me",
      heroStatus: "OPEN TO NEW OPPORTUNITIES",
      heroHello: "Hi, I'm",
      heroBeforeRole: "I am an",
      heroRoles: "IT & Application Support, System Analyst, and Web Developer",
      heroDescription: "who enjoys turning ideas into digital experiences that feel simple, useful, and memorable.",
      heroWorkButton: "View my work",
      heroContactButton: "Let's connect",
      heroLocation: "Based in Indonesia",
      heroRemote: "working from anywhere",
      stripOne: "DESIGNING WITH PURPOSE",
      stripTwo: "BUILDING WITH LOGIC",
      stripThree: "GROWING THROUGH PROCESS",
      sectionAbout: "ABOUT ME",
      aboutTitleOne: "Good technology",
      aboutTitleTwo: "starts with curiosity.",
      aboutCopy: "I enjoy designing and building websites—from understanding problems and shaping interfaces to ensuring everything works well across devices. To me, small details can make a big difference.",
      toolboxTitle: "WHAT I DO",
      educationTitle: "EDUCATION",
      educationType: "EDUCATION",
      educationDegree: "Bachelor of Information Systems (B.Comp.)",
      educationPlace: "Mercu Buana University Yogyakarta",
      internshipTitle: "INTERNSHIP EXPERIENCE",
      internshipOneType: "INTERNSHIP · 2025–2026",
      internshipOneRole: "Information Systems and Technology Governance Officer",
      internshipOnePlace: "Indonesian Coordinating Ministry for Human Development and Cultural Affairs",
      internshipOneNote: "University graduate internship program with a Very Good rating.",
      internshipTwoType: "INTERNSHIP · 2024",
      internshipTwoRole: "Public Communication Development Division",
      internshipTwoPlace: "Semarang City Department of Communication, Informatics, Statistics, and Encryption",
      sectionWork: "Portfolio",
      workTitleOne: "A few things",
      workTitleTwo: "I have built.",
      workIntro: "Small explorations and digital projects designed with curiosity.",
      projectOneTitle: "PKPT Annual Work Program Portal",
      projectOneDescription: "Annual work program management and monitoring.",
      projectTwoTitle: "PKPT Performance Dashboard",
      projectTwoDescription: "Summary of program performance and budget achievements.",
      capturesTitle: "Project previews",
      capturesDescription: "Screenshots and details from selected work.",
      captureOne: "PKPT Portal Login",
      captureTwo: "Assignment Commitment",
      captureThree: "Add Work Program",
      workFootnote: "Previews from the Annual Work Supervision Program Portal (PKPT).",
      sectionCertificates: "CERTIFICATES",
      certificateTitleOne: "Learn, then",
      certificateTitleTwo: "grow.",
      certificateDescription: "Certificates and achievements that support my journey.",
      sectionActivities: "ACTIVITIES",
      activityTitleOne: "Learning through",
      activityTitleTwo: "experience.",
      activityDescription: "Documentation of activities, collaborations, and memorable experiences.",
      footerContactTitle: "Contact Me",
      footerSkillsTitle: "Areas of Expertise",
      footerLinksTitle: "Links",
      footerHome: "Home",
      footerAbout: "About Me",
      footerWork: "Portfolio",
      footerCertificates: "Certificates",
      footerActivities: "Activities",
      footerContact: "Contact",
      footerSocialLabel: "SOCIAL MEDIA & CONTACT",
      footerMadeBy: "Created by",
      footerBuiltWith: "using",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
      closePreview: "Close preview",
      dialogLabel: "Image preview",
      heroImageAlt: "Dayang Nandasari's profile photo"
    }
  };

  function setLanguage(language) {
    const selected = translations[language] ? language : "id";
    const dictionary = translations[selected];

    document.documentElement.lang = selected;
    document.documentElement.dataset.language = selected;
    localStorage.setItem("portfolio-language", selected);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (dictionary[key] !== undefined) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-meta]").forEach((element) => {
      const key = element.dataset.i18nMeta;
      if (dictionary[key]) {
        element.setAttribute("content", dictionary[key]);
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const key = element.dataset.i18nAlt;
      if (dictionary[key]) {
        element.setAttribute("alt", dictionary[key]);
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
      const key = element.dataset.i18nAria;
      if (dictionary[key]) {
        element.setAttribute("aria-label", dictionary[key]);
      }
    });

    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle instanceof HTMLButtonElement) {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-label", isOpen ? dictionary.closeMenu : dictionary.openMenu);
    }

    const languageGroup = document.querySelector(".language-switcher");
    if (languageGroup instanceof HTMLElement) {
      languageGroup.setAttribute("aria-label", selected === "id" ? "Pilihan bahasa" : "Language selection");
    }

    document.querySelectorAll("[data-language]").forEach((button) => {
      if (button instanceof HTMLButtonElement) {
        const isSelected = button.dataset.language === selected;
        button.setAttribute("aria-pressed", String(isSelected));
        button.setAttribute(
          "aria-label",
          button.dataset.language === "id"
            ? "Gunakan Bahasa Indonesia"
            : "Use English"
        );
      }
    });

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute("content", selected === "id" ? "id_ID" : "en_US");
    }

    const dialog = document.querySelector("#image-dialog");
    if (dialog instanceof HTMLDialogElement) {
      dialog.setAttribute("aria-label", dictionary.dialogLabel);
    }

    document.dispatchEvent(new CustomEvent("languagechange", { detail: { language: selected } }));
  }

  const savedLanguage = localStorage.getItem("portfolio-language");
  const browserLanguage = navigator.language || "id";
  const initialLanguage =
    savedLanguage === "id" || savedLanguage === "en"
      ? savedLanguage
      : browserLanguage.toLowerCase().startsWith("id")
        ? "id"
        : "en";

  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });

  setLanguage(initialLanguage);

  window.PortfolioTranslations = { setLanguage, translations };
})();
