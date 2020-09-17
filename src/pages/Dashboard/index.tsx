import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repósitório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/53327704?s=400&u=3733bc7c0d41a45aa2c6a0930696a43da2aae998&v=4"
            alt="Lucas Hideki"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p> teste </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/53327704?s=400&u=3733bc7c0d41a45aa2c6a0930696a43da2aae998&v=4"
            alt="Lucas Hideki"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p> teste </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/53327704?s=400&u=3733bc7c0d41a45aa2c6a0930696a43da2aae998&v=4"
            alt="Lucas Hideki"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p> teste </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
