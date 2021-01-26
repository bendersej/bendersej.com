import { Head } from '../../components/Head';
import { BlogHeader } from '../../components/BlogHeader';
import { Article } from '../../components/Article.tsx';

const PostMetadata = {
  title: "Pourquoi l'Estonie",
  date: '5 Décembre 2020',
};

const Post = () => (
  <>
    <Head
      title="bendersej – walking thoughts"
      url="https://bendersej.com"
      description="Benjamin André-Micolon"
    />
    <BlogHeader postTitle={PostMetadata.title} />
    <Article>
      <h1>{PostMetadata.title}</h1>
      <h2>{PostMetadata.date}</h2>
      <main>
        <p>
          On me pose régulièrement cette question. Des Estoniens, étonnés de voir un étranger vivre
          de son plein gré dans leur petit pays, ou bien encore des Français incrédules qui ont du
          mal à comprendre pourquoi j'ai décidé de quitter la France.
        </p>
        <p>
          <a href="https://fr.wikipedia.org/wiki/Estonie" target="_blank">
            L'Estonie
          </a>
          , un pays d'Europe du nord, peuplé d'1.3 millions d'habitants, est logée entre la
          Lettonie, la Finlande et la Russie. A la suite de la chute de l'union soviétique, le pays
          récupère son indépendance. L'occupation soviétique a fait des dégats, notamment
          économiques: en 1938, avant la perte de cette indépendance,{' '}
          <a href="http://www.nordicestonia.com/nordic/gdp-per-capita-of-estonia-before-soviet-union/">
            le pays a un PIB supérieur à celui de la Finlande.
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
          <a href="https://fr.wikipedia.org/wiki/Kazaa">KaZaA</a> voit le jour en Estonie, suivi de{' '}
          <a href="https://fr.wikipedia.org/wiki/Skype">Skype</a>, par les mêmes programmeurs, en
          2003{' '}
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
          s'authentifier. Plus besoin du lecteur de carte contraignant, qui nécessite d'utiliser un
          ordinateur.
        </p>
        <p>
          La carte d'idendité mérite à elle seule un article. Si le sujet vous intéresse, je vous
          conseille cet excellent article:{' '}
          <a href="https://usbeketrica.com/fr/article/de-l-interet-du-passeport-numerique">
            Passeport numérique : faut-il suivre la voie estonienne ?
          </a>
        </p>
        <h1>Et du coup ?</h1>
        <p>
          C’est plus ou moins ce que je savais (merci Internet) lorsque j’ai décidé de partir pour
          l’Estonie dans le cadre de mes études.
        </p>
        <p>
          J’ai toujours été intéressé par les pays scandinaves, l’anglais, l’informatique et la
          technologie plus généralement: l’Estonie semblait être le candidat idéal.
        </p>
        <p>
          Surtout dans la mesure où je souhaitais de plus en plus partir voir ailleurs. Ajouter à
          ça, le gouffre entre le possible et la réalité pour tout ce qui concernait ma vie de
          citoyen se faisait de plus en plus sentir.
        </p>
        <p>
          Très concrètement, j’avais vu mes parents s’occuper de la « paperasse » en grandissant et
          je voulais pas de ce « deuxième travail ». En somme, payer des taxes et contribuer à la
          société, oui, fournir un effort pour le faire? Ça non.
        </p>
        <p>
          Et c’est la où l’Estonie me semblait être l’eldorado: une carte d’identité pour tout
          faire, pas ou peu de bureaucracie, le tout numérisé: bref, aux antipodes de ce que j’avais
          vécu (en spectateur) pendant toute mon enfance.
        </p>
        <p>Deux anecdotes que je raconte souvent, pour illustrer mon propos:</p>
        <p>
          La première est en lien avec ma couverture sociale étudiante. Après avoir fait une partie
          de mes études à St Etienne, j’étais de retour à Lyon. Pour régulariser mon statut, j’étais
          donc allé au bureau de cette même sécu. Après avoir fait la queue (30min), j’arrive au
          guichet, tous mes papiers prêts.
        </p>
        <p>
          L’employé réceptionne ces même papiers et commence à pianoter. Quelques secondes plus
          tard, elle commence à froncer ses sourcils. Je lui demande si j’ai oublié quelque chose;
          le verdict tombe:
        </p>
        <p>“Vous avez créé votre dossier à St Etienne?”</p>
        <p>- “Oui...” (*épiphanie*)</p>
        <p>- “Il faudra le mettre à jour la-bas, je ne peux rien faire ici. Bonne journée !”</p>
      </main>
    </Article>
  </>
);

export default Post;
