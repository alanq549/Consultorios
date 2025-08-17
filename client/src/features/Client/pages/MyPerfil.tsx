import { useAppSelector } from "../../../hooks/redux";
import ClientProfileCard from "../components/ClientProfileCard";
import ClientProfileFormModal from "../components/ClientProfileFormModal";
import { useState } from "react";
import '@/styles/features/client/MyProfile.css';

const MyProfile = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [showForm, setShowForm] = useState(false);

  if (!user) return <div className="profile-loading-error">Error al cargar el perfil</div>;

  return (
    <div className="c_profile-container">
      <div className="c_profile-header-container">
        <h1 className="c_profile-title">Mi Perfil</h1>
      </div>

      <div className="c_profile-content">
<ClientProfileCard onEditClick={() => setShowForm(true)} />
      </div>

      <ClientProfileFormModal
        profile={user}
        isOpen={showForm}
        onClose={() => setShowForm(false)}
      />
    </div>
  );
};

export default MyProfile;