import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { HomePage } from "@/features/home";
import { SellPage } from "@/features/sell";
import { EwastePage } from "@/features/ewaste";
import { GalleryPage } from "@/features/gallery";
import { DataDestructionPage } from "@/features/data-destruction";
import { OfficeClearancePage } from "@/features/office-clearance";
import { AboutPage } from "@/features/about";
import { ContactPage } from "@/features/contact";
import { NotFoundPage } from "@/features/not-found";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sell" element={<SellPage />} />
        <Route path="e-waste" element={<EwastePage />} />
        <Route path="data-destruction" element={<DataDestructionPage />} />
        <Route path="office-it-clearance" element={<OfficeClearancePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
