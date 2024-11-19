import Image from 'next/image';
import xboxLogo from '../../../public/xbox-logo.png';
import nintendoLogo from '../../../public/nintendo-logo.jpg';
import playstationLogo from '../../../public/playstation-logo.jpg';
import estilos from './ItemJogo.module.css';

const ItemJogo = ({ nome, plataforma }) => {
  return (
    <div className={estilos.card}>
      <figure>
        <Image
          src={
            plataforma === 'xbox'
              ? xboxLogo
              : plataforma === 'playstation'
              ? playstationLogo
              : nintendoLogo
          }
          alt={`logo ${plataforma}`}
        />
      </figure>
      <div>
        <p>{nome}</p>
      </div>
    </div>
  );
};

export default ItemJogo;
