import React, { useState } from 'react';
import { TwitterOutlined } from '@ant-design/icons';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { User } from '@/utils/type';
import { useRouter } from 'next/navigation';
import { login, signup } from '@/utils/storage';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const router = useRouter();
  const [error, setError] = useState(false);

  const onLogin: SubmitHandler<User> = (user) => {
    const success = login(user);
    if (success) {
      router.push('/');
    } else {
      setError(true);
    }
  };

  const onSignup: SubmitHandler<User> = (user) => {
    signup(user);
    router.push('/');
  };

  return (
    <div className="h-screen bg-white pt-10 md:flex md:justify-center">
      <form className="h-fit w-60 rounded bg-slate-200 px-8 pt-6 pb-8 shadow-md">
        <div className="mb-5 flex place-content-center">
          <TwitterOutlined className="text-3xl text-sky-500" />
        </div>

        <div className="flex flex-col">
          <Input
            name="name"
            placeholder="Username"
            register={register}
            errors={errors}
          ></Input>
          <Input
            name="password"
            placeholder="Password"
            register={register}
            errors={errors}
          ></Input>
        </div>
        {error && (
          <div className="mb-2 font-sans text-xs text-red-400">
            Wrong user name or password.
          </div>
        )}

        <div className="mt-2.5 flex place-content-between">
          <Button
            primary
            size="medium"
            label="Log in"
            data-testid="login"
            onClick={handleSubmit(onLogin)}
          />
          <Button
            size="small"
            label="Sign up"
            type="submit"
            onClick={handleSubmit(onSignup)}
          />
        </div>
      </form>
    </div>
  );
}
