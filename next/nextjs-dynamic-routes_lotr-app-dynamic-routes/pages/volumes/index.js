import Link from "next/link";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Volumes() {
  const router = useRouter();

  // function handleRandomRedirect() {
  //   const randomIndex = Math.floor(Math.random() * volumes.length);
  //   const randomVolume = volumes[randomIndex];
  //   router.push(`/volumes/${randomVolume.slug}`);
  // }

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  return (
    <>
      <Head>
        <title>List of Volumes</title>
      </Head>

      <h1>The Lord of the Rings</h1>
      <p>description</p>
      <ul>
        {volumes.map((volume) => {
          return (
            <li key={volumes.color}>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={() => {
          const randomValue = getRandomElement(volumes);
          router.push(`/volumes/${randomValue.slug}`);
        }}
      >
        Suprise me!
      </button>
    </>
  );
}
