'use client';
import Image from 'next/image';
import estilos from './page.module.css';
import Lupa from '../../public/lupa.png';
import ItemJogo from '@/components/ItemJogo';
import { jogosExclusivos } from '../dados/dados.js';
import { useState } from 'react';

export default function Home() {
  const [listaJogos, setListaJogos] = useState(jogosExclusivos);

  function filtrarJogos(plataforma) {
    setListaJogos(
      jogosExclusivos.filter((jogo) => jogo.plataforma === plataforma),
    );
  }

  function limparfiltros() {
    setListaJogos(jogosExclusivos);
  }

  return (
    <main className={estilos.container}>
      <h2>Lista de Jogos Exclusivos</h2>
      <div className={estilos.container_input}>
        <Image src={Lupa} alt="icone" />
        <input type="text" placeholder="Pesquisar por um jogo" />
      </div>
      <div className={estilos.btnFiltros}>
        <button
          style={{ backgroundColor: 'green' }}
          onClick={() => filtrarJogos('xbox')}
        >
          XBOX
        </button>
        <button
          style={{ backgroundColor: 'darkblue' }}
          onClick={() => filtrarJogos('playstation')}
        >
          PLAYSTATION
        </button>
        <button
          style={{ backgroundColor: 'darkred' }}
          onClick={() => filtrarJogos('nintendo')}
        >
          NINTENDO
        </button>
        <button onClick={limparfiltros}>LIMPAR FILTROS</button>
      </div>
      <div>
        {listaJogos.map(({ id, nome, plataforma }) => (
          <ItemJogo key={id} nome={nome} plataforma={plataforma} />
        ))}
      </div>
    </main>
  );
}
