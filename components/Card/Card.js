import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Card.module.css';

const Card = ({ name, phone, email, image, id }) => {
	const router = useRouter();
	return (
		<div
			onClick={() => router.push(`/cats/${id}`)}
			className={styles.card}
		>
			<div className={styles['card-header']}>
				<Image
					src={image.url}
					alt={image.alt}
					className={styles['card-img']}
					layout='fill'
				/>
			</div>

			<div>
				<h3>{name}</h3>
				<p>{phone}</p>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
