import Filho from './Filho';

export default function Pai() {
    return (
        <div>
            <Filho nome="Breno" familia="Norberto" />
            <Filho nome="Breno" familia="Cavalcante" />
        </div>
    )
}