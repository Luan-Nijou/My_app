import { Link } from "react-router-dom";

export default function Rodape() {
  return (
    <>
      <footer>
        <div>
          <ul>
            <li>
              <a><Link to="https://github.com/Luan-Nijou/My_app"> GitHub </Link></a>
            </li>
            <li>
              <a href="#">X</a>
            </li>
            <li>
              <a href="#">Reddit</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
