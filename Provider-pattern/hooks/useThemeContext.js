function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const themes = {
    light: {
      background: '#fff',
      color: '#000',
    },
    dark: {
      background: '#171717',
      color: '#fff',
    },
  };

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  };

  return <ThemeContext.Provider value={providerValue}>{children}</ThemeContext.Provider>;
}

function useThemeContext() {
  const theme = useContext(ThemeContext);
  if (!theme) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }

  return theme;
}

function App() {
  return (
    <div className={`App theme-${theme}`}>
      <ThemeProvider>
        <Toggle />
        <List />
      </ThemeProvider>
    </div>
  );
}
