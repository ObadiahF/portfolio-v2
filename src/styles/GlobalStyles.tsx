export const GlobalStyles = () => (
  <style>{`
    @keyframes float {
      0%, 100% { transform: translate(0, 0) scale(1); }
      25% { transform: translate(5%, 5%) scale(1.05); }
      50% { transform: translate(-5%, 10%) scale(0.95); }
      75% { transform: translate(-10%, 5%) scale(1.02); }
    }

    html {
      scroll-behavior: smooth;
    }

    ::selection {
      background: rgba(16, 185, 129, 0.3);
    }
  `}</style>
);
