import React from 'react'

interface LogoProps {
  text: string;
}

interface HeaderProps {
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

function Logo({ text }: LogoProps) {
  return <a href="/" className="text-boss-black">{text}</a>;
}

export function Header({ }: HeaderProps) {
  return (
    <header className="w-full box-border px-5 border-b border-slate-300">
      <div className="relative flex justify-start items-center py-2.5">
        <div className="boss-page-header__group boss-page-header__group_role_logo">
          <Logo text="Boss"/>
        </div>
      </div>
    </header>
  )
}
