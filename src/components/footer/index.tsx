import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons';
import { Chivo } from 'next/font/google';

const chivo = Chivo({
  subsets: ['latin'],
  variable: '--font-chivo',
});

const index = (): JSX.Element => {
    return (
        <footer className="pt-[1rem] mt-[1.5rem]  pb-[1.5rem] space-x-6 border-t-2 border-coffeeBlack rounded-md flex flex-row justify-center">
          <a
            className="hover:opacity-50 transition duration-250"
            href="https://github.com/Jared-Velasquez"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a
            className="hover:opacity-50 transition duration-250"
            href="https://www.linkedin.com/in/jaredvel25/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            className="hover:opacity-50 transition duration-250"
            href="https://devpost.com/Jared-Velasquez"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faDev} size="2x" />
          </a>
          <a
            className="hover:opacity-50 transition duration-250"
            href="mailto:jaredvel25@ucla.edu"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </footer>
    );
}

export default index;