import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="flex flex-col grow bg-zinc-950 text-white">
      <div className="flex flex-col grow items-center justify-center px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 w-full max-w-lg p-8 rounded-lg space-y-5"
        >
          <h1 className="text-blue-500 text-2xl font-bold text-center">
            Login
          </h1>
          <div className="flex flex-col">
            <label className="italic mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              className="rounded-md p-2 bg-gray-600/30"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="italic mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="rounded-md p-2 bg-gray-600/30"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <button className="bg-blue-900 hover:bg-blue-800 p-2 rounded-lg w-full font-semibold">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
