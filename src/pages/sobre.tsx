import { GetServerSideProps } from 'next';

export default function Sobre({ response }: any) {
  return (
    <>
      <h1>sobre</h1>
      <br />
      {JSON.stringify(response)}
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const promise = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const response = await promise.json();


  return {
    props: {
      response
    }
  }
};