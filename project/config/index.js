const dev = process.env.NODE_ENV !== "production";

export const server = dev ? 'http://s1n.vercel.app/' : 'http://localhost:3000'