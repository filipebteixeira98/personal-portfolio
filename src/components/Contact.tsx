import { motion } from 'motion/react';
import { Controller, useForm } from 'react-hook-form';

import { fadeUp } from '@/lib/animations';

import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send } from 'lucide-react';

type ContactFormValues = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export function Contact() {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function handleSubmit(values: ContactFormValues) {
    console.log(values);
  }

  return (
    <motion.section
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.8 }}
      variants={fadeUp}
      className='mt-30 scroll-mt-10'
      id='contact'
    >
      <SectionHeader
        subtitle='Contact'
        title="Let's make something awesome together!"
      />
      <form
        id='form-rhf-demo'
        onSubmit={form.handleSubmit(handleSubmit)}
        className='w-full mx-auto space-y-4 mt-10'
      >
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <Controller
            name='name'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className='w-full'
              >
                <FieldLabel htmlFor='form-rhf-demo-title'>Name</FieldLabel>
                <Input
                  {...field}
                  id='form-rhf-demo-title'
                  aria-invalid={fieldState.invalid}
                  placeholder='John Doe'
                  autoComplete='off'
                  className='border-0'
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name='company'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className='w-full'
              >
                <FieldLabel htmlFor='form-rhf-demo-title'>Company</FieldLabel>
                <Input
                  {...field}
                  id='form-rhf-demo-title'
                  aria-invalid={fieldState.invalid}
                  placeholder='Acme'
                  autoComplete='off'
                  className='border-0'
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name='email'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className='w-full'
              >
                <FieldLabel htmlFor='form-rhf-demo-title'>E-mail</FieldLabel>
                <Input
                  {...field}
                  id='form-rhf-demo-title'
                  aria-invalid={fieldState.invalid}
                  placeholder='you@example.com'
                  autoComplete='off'
                  type='email'
                  className='border-0'
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          <Controller
            name='phone'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                className='w-full'
              >
                <FieldLabel htmlFor='form-rhf-demo-title'>Phone</FieldLabel>
                <Input
                  {...field}
                  id='form-rhf-demo-title'
                  aria-invalid={fieldState.invalid}
                  placeholder='+1234567890'
                  autoComplete='off'
                  type='tel'
                  className='border-0 lining-nums'
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>
        <Controller
          name='message'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              className='w-full'
            >
              <FieldLabel htmlFor='form-rhf-demo-description'>
                Message
              </FieldLabel>
              <Textarea
                placeholder='Write your message...'
                className='h-36 border-0'
                {...field}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Button
          type='submit'
          size='lg'
        >
          <Send size={15} />
          Send message
        </Button>
      </form>
    </motion.section>
  );
}
