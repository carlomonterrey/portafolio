import React from 'react'
import { useTranslation } from 'react-i18next';
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"; // Asegúrate de que la ruta sea correcta

export const ChangeLenguaje = () => {
 const { i18n } = useTranslation();

 const changeLanguage = (lng: string | undefined) => {
   i18n.changeLanguage(lng);
 };
 const handleChange = (event:any) => {
  i18n.changeLanguage(event);
};

 return (
  <Select onValueChange={handleChange} defaultValue={i18n.language}>
    <SelectTrigger>
      <span>{i18n.language === 'es' ? 'Español' : 'English'}</span>
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="es">Español</SelectItem>
      <SelectItem value="en">English</SelectItem>
    </SelectContent>
  </Select>
);
};

