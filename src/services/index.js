import { supabase } from "./supabase";

export const getVideos = async () => {
  const { data, error } = await supabase.from("videos").select(`
    *, users:user_id (
        avatar,
        username,
        id
        )
  `);


  return [error, data];
};