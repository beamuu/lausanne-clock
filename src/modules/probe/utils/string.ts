export function generateMarkdownTable(data: string[][]): string {
    if (data.length === 0) return '';
  
    const [headers, ...rows] = data;
  
    const headerLine = `| ${headers.join(' | ')} |`;
    const separatorLine = `| ${headers.map(() => '---').join(' | ')} |`;
    const rowLines = rows.map(row => `| ${row.join(' | ')} |`);
  
    return [headerLine, separatorLine, ...rowLines].join('\n');
}

export function createMarkdownDocument(lines: string[]): string {
    return lines.join('\n');
}