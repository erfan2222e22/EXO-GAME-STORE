import React from "react";
import Typography from "@mui/material/Typography";
import styleComponents from "../components/component-Style/StyleAboutUs";
import img from "./aboutUsImg/image_2023-06-10_12-39-02.png";
export default function AboutUs() {
  const { BoxAboutUs, BoxImg } = styleComponents;
  return (
    <>
      <BoxAboutUs>
        <Typography sx={{ fontFamily: "vazir" }} variant="h6">
          درباره اگزو
        </Typography>
        <Typography variant="body3">
          فروشگاه آنلاین اگزو، یک فروشگاه تخصصی در حوزه تجهیزات و کالاهای گیمینگ
          است که از سال ۹۵ کار خود را با هدف ارائه‌ی خدمات اعم از فروش و مشاوره
          تخصصی کالاهای سخت افزاری، گیمینگ و شبکه آغاز کرد. شما می‌توانید در این
          فروشگاه بهترین کالاهای گیمینگ از برندهای معتبر را با بهترین کیفیت
          دریافت کنید و یا از طریق تماس با کارشناسان فروشگاه اگزو، که خود نفرات
          فنی توانمند کشور در حوزه کامپیوتر و گیم هستند، سوالات و مشکلات خود در
          میان بگذارید. فروشگاه اگزو به عنوان نماینده‌ی فروش بسیاری از برندهای
          معتبر گیمینگ از قبیل ریزر٬ رپو٬ ام‌اس‌آی، ایسوس٬ لاجیتک و ... این
          تضمین را به شما می‌دهد که کالای اصیل مد نظر شما در اسرع وقت و با
          بهترین بسته بندی در اختیار شما قرار می‌گیرد. شما عزیزان می‌توانید از
          طریق شبکه‌های اجتماعی فروشگاه اگزو از قبیل کانال تلگرام٬ صفحه‌ی
          اینستاگرام، یوتیوب و آپارات از آخرین اخبار دنیای بازی، تخفیفات، کالاها
          اگاه شوید.
        </Typography>
        <BoxImg component="img" src={img} alt="img"></BoxImg>
      </BoxAboutUs>
    </>
  );
}
