interface Uploader {
  add(file: string): Promise<{ key: string; url: string }>;
  remove(url: string): Promise<void>;
}

export default Uploader;
