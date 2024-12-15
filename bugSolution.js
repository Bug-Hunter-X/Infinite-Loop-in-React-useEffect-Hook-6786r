```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The dependency array now includes 'count', preventing the infinite loop
    console.log('useEffect ran');
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```