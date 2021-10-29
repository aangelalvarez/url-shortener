import sha256 from 'sha256';

const sha256Short = (input: string) => {
    const sha256Str: string = sha256(input);
    const sha256Shrt = `${sha256Str[0]}${sha256Str[9]}${sha256Str[18]}${sha256Str[27]}${sha256Str[36]}${sha256Str[45]}${sha256Str[54]}${sha256Str[63]}`;
    return sha256Shrt;
};

export default sha256Short;