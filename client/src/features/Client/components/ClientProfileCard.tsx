import { useAppSelector } from "../../../hooks/redux";
import { useState } from "react";
import './ClientProfileCard.css';

interface Props {
  onEditClick?: () => void;
}

const ClientProfileCard: React.FC<Props> = ({ onEditClick }) => {
  const user = useAppSelector((state) => state.auth.user);
  const [imageError, setImageError] = useState(false);

  if (!user) {
    return (
      <div className="profile-error" role="alert">
        <p>No se encontró información del usuario.</p>
      </div>
    );
  }

  const handleImageError = () => setImageError(true);

  return (
    <article className="profile-card-container">
<section className="profile-avatar-section" aria-labelledby="avatar-heading">
  <h3 id="avatar-heading" className="client_sr-only">Avatar del usuario</h3>

  <div className="relative">
    {imageError ? (
      <div 
        className="profile-avatar-fallback" 
        aria-label={`Iniciales de ${user.name} ${user.lastName}`}
        title={`${user.name} ${user.lastName}`}
      >
        {user.name.charAt(0)}{user.lastName.charAt(0)}
      </div>
    ) : (
      <img
        src={`${import.meta.env.VITE_STATIC_URL}${user.avatar}`}
        alt={`Foto de perfil de ${user.name} ${user.lastName}`}
        onError={handleImageError}
        className="profile-avatar"
        loading="lazy"
        width="144"
        height="144"
      />
    )}

    {onEditClick && (
      <button
        onClick={onEditClick}
        className="absolute bottom-1 right-1 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md rounded-full p-1.5 text-sm shadow-md hover:bg-white dark:hover:bg-zinc-700 transition"
        aria-label="Editar foto de perfil"
      >
        ✏️
      </button>
    )}
  </div>
</section>


      <div className="profile-content-wrapper">
        <section className="profile-info-section" aria-labelledby="info-heading">
          <h3 id="info-heading" className="sr-only">Información personal</h3>
          <h2 className="profile-name">
            {user.name} {user.lastName}
            <span className="verification-status">
              {user.isVerified ? (
                <span className="verification-badge verified" aria-label="Cuenta verificada">
                  <span aria-hidden="true">✅</span> Verificado
                </span>
              ) : (
                <span className="verification-badge unverified" aria-label="Cuenta no verificada">
                  <span aria-hidden="true">❌</span> No verificado
                </span>
              )}
            </span>
          </h2>

        
        </section>

        <section className="profile-contact-section" aria-labelledby="contact-heading">
          <h3 id="contact-heading" className="sr-only">Información de contacto</h3>
          <ul className="contact-details-list">
            <li className="detail-item">
              <span className="detail-icon" aria-hidden="true">✉️</span>
              <a 
                href={`mailto:${user.email}`} 
                className="detail-value hover:underline"
                aria-label={`Enviar correo a ${user.email}`}
              >
                {user.email}
              </a>
            </li>

            <li className="detail-item">
              <span className="detail-icon" aria-hidden="true">📱</span>
              {user.phone ? (
                <a 
                  href={`tel:${user.phone}`} 
                  className="detail-value hover:underline"
                  aria-label={`Llamar a ${user.phone}`}
                >
                  {user.phone}
                </a>
              ) : (
                <span className="detail-value">No especificado</span>
              )}
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
};

export default ClientProfileCard;
