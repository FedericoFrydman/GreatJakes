import './FirmFactCard.scss';

export const FirmFactCard = ({ children, variant = 'default' }) => {
  return (
    <div
      className={
        variant !== 'default'
          ? `firm-fact-card firm-fact-card-${variant}`
          : 'firm-fact-card'
      }
    >
      {children}
    </div>
  );
};
