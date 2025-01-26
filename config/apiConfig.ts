export const makeAPIRequest = async (route: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${route}`, {
    headers: {
      "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY!,
      "x-rapidapi-host": process.env.NEXT_PUBLIC_API_HOST!,
    },
  });
  const data = await res.json();
  return data;
};
