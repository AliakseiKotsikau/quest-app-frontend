import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Input } from '@mantine/core';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Input size="xl" radius="xl" placeholder="Input component" />
    </>
  );
}

function Demo() {
  return <Input size="xl" radius="xl" placeholder="Input component" />;
}