"use client";

import { Input } from "@chakra-ui/react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Input
      placeholder="Search for articles"
      maxW={{ md: "250px" }}
      value={query}
      onChange={handleChange}
    />
  );
}
