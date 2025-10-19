function VeevaTokens({ tokens }) {
  return (
    <table className="">
      <tbody>
        <tr>
          <th className="text-left px-2">Token</th>
          <th className="text-left px-2">Value</th>
        </tr>
        {tokens.map((token, index) => (
          <tr
            key={index}
          >
            <td className="px-2">{index + 1}</td>
            <td className="px-2">{token}</td>
            <td className="px-2">{token.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default VeevaTokens