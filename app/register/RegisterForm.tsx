"use client";
import {
    TextInput,
    PasswordInput,
    Checkbox,
    // Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
    import classes from './RegisterForm.module.css';
    import Link from 'next/link';
    import { useState } from 'react';

export default function RegisterForm() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");

    return (
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Sup.
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
            Already have an account?{' '}
          <Link href={"/login"}> Log In</Link>
    
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <form>
            <TextInput onChange={(e) => setName(e.target.value)} label="First Name" placeholder="First Name" required />
          <TextInput onChange={(e) => setEmail(e.target.value)} label="Email" placeholder="you@mantine.dev" required mt="lg" />
          <PasswordInput onChange={(e) => setPassword(e.target.value)} label="Password" placeholder="Your password" required mt="lg"/>
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            {/* <Anchor component="button" size="sm">
              Forgot password?
            </Anchor> */}
          </Group>
          <Button fullWidth mt="xl">
            Register
          </Button>
            </form>
            {error && (
              <p>{error}</p>
          )}
        </Paper>
      </Container>
    );
  }