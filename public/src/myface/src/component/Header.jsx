import React from "react";
import { Link } from 'react-router-dom';

export function Header() {
    return (
      <header >
        <Link to="/posts"> Posts </Link>
      </header>
    );
  }