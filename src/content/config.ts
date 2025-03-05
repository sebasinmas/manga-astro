import { defineCollection, z } from "astro:content";

const mangas = defineCollection(
    {
        schema: z.object({
            title: z.string(),
            author: z.string(),
            releaseYear: z.string().regex(/[0-9]{4}\/(0[1-9]|1[0-2])\/([0-2][0-9]|3[0-1])/),
            img: z.string(),
            description: z.string(),
            languages: z.object({
                esp: z.string().url(),
                eng: z.string().url(),
            })          
        })
    }
);

export const collections = {mangas};

// No es necesario envolver en comillas. Ejemplo "idiomas" esto solo se hace cuando quieres usar carácteres especiales
// Pero se puede hacer. No afecta en el funcionamiento.
