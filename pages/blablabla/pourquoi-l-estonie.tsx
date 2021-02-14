import * as React from 'react';
import classnames from 'classnames';

import { Head } from '../../components/Head';
import { BlogHeader } from '../../components/BlogHeader';
import { Article } from '../../components/Article.tsx';

import styles from './styles.module.css';

const PostMetadata = {
  title: "Pourquoi l'Estonie",
  date: '5 Décembre 2020',
};

const Post = () => {
  const [isAnecdotesDisplayed, setIsAnecdotesDisplayed] = React.useState(false);

  return (
    <>
      <Head
        title="bendersej – blablabla"
        url="https://bendersej.com"
        description="Benjamin André-Micolon"
      />
      <BlogHeader postTitle={PostMetadata.title} />
      <Article>
        <h1>{PostMetadata.title}</h1>
        <h2>{PostMetadata.date}</h2>
        <main>
          <p>
            On me pose régulièrement cette question. Souvent des Estoniens, étonnés de voir un
            étranger vivre de son plein gré dans leur petit pays, parfois des Français incrédules
            qui ont du mal à comprendre pourquoi j'ai décidé de quitter la France.
          </p>
          <p>
            <a href="https://fr.wikipedia.org/wiki/Estonie" target="_blank">
              L'Estonie
            </a>
            , un pays d'Europe du nord, peuplé d'1.3 millions d'habitants, est logé entre la
            Lettonie, la Finlande et la Russie. A la suite de la chute de l'union soviétique, le
            pays récupère son indépendance. L'occupation soviétique a fait des dégats, notamment
            économiques: en 1938, avant la perte de cette indépendance,{' '}
            <a href="http://www.nordicestonia.com/nordic/gdp-per-capita-of-estonia-before-soviet-union/">
              l'Estonie a un PIB supérieur à celui de la Finlande.
            </a>
          </p>
          <p>
            Le gouvernement d'alors, avec à sa tête{' '}
            <a href="https://fr.wikipedia.org/wiki/Lennart_Meri">Lennart Meri</a>, fait le choix osé
            de concentrer ses efforts (et budget) dans la numérisation du pays, en commencant par
            l'éducation, avec notamment le projet{' '}
            <a href="https://en.wikipedia.org/wiki/Tiigrih%C3%BCpe">Tiigrihüpe</a> qui vise à
            connecter les écoles à internet. Le projet est lancé en février 1996. En 2001,{' '}
            <a href="https://www.hitsa.ee/about-us/historical-overview/1997-2000">
              l'intégralité des écoles estoniennes sont connectées à Internet.
            </a>
          </p>
          <p>
            Ces investissements continuent, avec{' '}
            <a href="https://www2.politsei.ee/en/nouanded/dokumentide-naidised/identity-card/">
              en 2002
            </a>
            , l'introduction d'une carte d'identité numérique. Dès lors, il est possible de signer
            numériquement des documents avec cette carte,{' '}
            <a href="https://e-estonia.com/a-digital-success-story-the-cornerstone-of-e-estonia-celebrates-its-jubilee/">
              signature qui est l'égale d'une signature traditionnelle sur papier.
            </a>
          </p>
          <p>
            En parallèle, et dans un tout autre registre,{' '}
            <a href="https://fr.wikipedia.org/wiki/Kazaa">KaZaA</a> voit le jour en Estonie, suivi
            de <a href="https://fr.wikipedia.org/wiki/Skype">Skype</a>, par les mêmes programmeurs,
            en 2003{' '}
          </p>
          <p>
            Cette lancée continue, avec{' '}
            <a href="https://e-estonia.com/a-digital-success-story-the-cornerstone-of-e-estonia-celebrates-its-jubilee/">
              en 2005, le premier vote en ligne au monde{' '}
            </a>
            pour des élections municipale, dans le cadre d'un projet pilote
          </p>
          <p>
            En 2007, l'introduction de{' '}
            <a href="https://e-estonia.com/solutions/e-identity/mobile-id/">mobile-ID</a> permet aux
            estoniens d'utiliser leur téléphone portable pour signer ou bien simplement
            s'authentifier. Plus besoin du lecteur de carte contraignant, qui nécessite d'utiliser
            un ordinateur.
          </p>
          <p>
            La carte d'idendité mérite à elle seule un article. Si le sujet vous intéresse, je vous
            conseille cet excellent article:{' '}
            <a href="https://usbeketrica.com/fr/article/de-l-interet-du-passeport-numerique">
              Passeport numérique : faut-il suivre la voie estonienne ?
            </a>
          </p>
          <p>
            Je pourrais continuer avec beaucoup d'autres exemples du e-government estonien, de{' '}
            <a href="https://e-resident.gov.ee/" target="_blank">
              l'e-residency
            </a>
            , parler des entreprises numériques qui ne cessent de fleurir ici: pourquoi et comment.
            <br />
            Si vous êtes intéressé par ce domaine (investisseur, fonctionnaire, curieux...), je vous
            invite à me contacter directement <a href="mailto:estonie@bendersej.com">par email</a>
          </p>
          <h1>Et du coup ?</h1>
          <p>
            C’est plus ou moins ce que je savais (merci Internet) lorsque j’ai décidé de partir pour
            l’Estonie dans le cadre de mes études.
          </p>
          <p>
            J’ai toujours été intéressé par les pays scandinaves, l’anglais, l’informatique et la
            technologie plus généralement:{' '}
            <a href="https://fr.wikipedia.org/wiki/Estonie" target="_blank">
              l'Estonie
            </a>{' '}
            semblait être l'endroit idéal.
          </p>
          <p>
            En parallèle, à mesure que je grandissais (et commencait à avoir des responsabilités),
            je découvrais la vie du français moyen en contact avec l'administration.
            <br />
            Les démarches à faire, les inscriptions répétées à l'école et l'université où chaque
            année j'avais l'impression de n'avoir jamais existé, à devoir fournir, à nouveau, les
            mêmes informations.
          </p>
          <p>
            J'avais déjà un avant-goût de ce qui m'attendait en ayant vu mes parents s’occuper de la
            « paperasse » en grandissant et je ne voulais pas de ce « deuxième travail ».
            <br />
            Payer des taxes et contribuer à la société: oui.
            <br />
            Fournir un effort pour le faire? Non.
          </p>
          <p>
            L’Estonie c'était un peu le rêve (en théorie): une carte d’identité pour tout faire, pas
            ou peu de bureaucracie (
            <a href="https://fr.wikipedia.org/wiki/Bureaucratie">terme créé par un français</a>),
            avec notamment le concept du e-gouvernement du{' '}
            <a href="https://en.wikipedia.org/wiki/Once-only_principle" target="_blank">
              "Once-only"
            </a>{' '}
            (demander des informations une fois seulement), le tout numérisé: aux antipodes de ce
            que{' '}
            <button onClick={() => setIsAnecdotesDisplayed((prevValue) => !prevValue)}>
              j’avais vécu
            </button>{' '}
            et allais devoir vivre.
          </p>
          <aside
            className={classnames({
              [styles.aside]: true,
              [styles.appear]: isAnecdotesDisplayed,
            })}>
            <h2>Deux anecdotes que je raconte souvent à ce sujet</h2>
            <p>
              <em>I.</em> Après avoir fait une partie de mes études à St Etienne, j’étais de retour
              à Lyon. Pour régulariser mon statut de couverture sociale, j’étais donc allé au bureau
              de cette même sécu.
            </p>
            <p>
              Après avoir fait la queue (30min), j’arrive au guichet, tous mes papiers prêts.
              L’employée réceptionne ces même papiers et commence à pianoter.
            </p>
            <p>Quelques secondes plus tard, elle commence à froncer ses sourcils:</p>
            <ul>
              <li>Il manque quelque chose?</li>
              <li>“Vous avez créé votre dossier à St Etienne?”</li>
              <li>“Oui...” (*épiphanie*)</li>
              <li>
                “Il faudra le mettre à jour la-bas, je ne peux rien faire ici. Bonne journée !”
              </li>
            </ul>
            <br />
            <p>
              <em>II.</em> La soirée où j'ai oublié ma carte de transports TECELY.
            </p>
            <p>
              Arrivé au portique, je vois le métro arriver de l’autre côté, il est 00:15 et c’est le
              dernier.
            </p>
            <p>
              Je fouille frénétiquement mes poches sans trouver ma carte. Pas le temps d’acheter un
              ticket, Je décide de passer par dessus le portique et me dirige vers les portes du
              metro qui commence à biper.
            </p>
            <p>Un main se pose sur mon épaule et m’arrête dans mon élan.</p>
            <p>Je me retourne et fais face à un agent des transports.</p>
            <p>La discussion qui suit:</p>
            <ul>
              <li>“Bonsoir Monsieur, titre de transports s’il-vous-plait”</li>
              <li>
                J’ai oublié ma carte chez moi, mais je suis abonné depuis maintenant 9 ans, vous
                pouvez vérifier. *pointé du doigt le terminal que l’agent tient dans dans main”
              </li>
              <li>
                “Hahah Jeune Homme, vous croyez vraiment que toutes informations peuvent tenir dans
                cette petite machine?”
              </li>
              <li>“OK, combien je vous dois...”</li>
            </ul>
          </aside>
        </main>
      </Article>
    </>
  );
};

export default Post;
