# sample-next-auth-20240831

以下の技術を使って GitHub 認証を実装してみた。

- Corepack
- Turborepo
- Next.js
- NextAuth.js
- Biome

---

- Corepack での pnpm 管理を試したい
- NextAuth.js を試したい
- Turborepo/VSCode Workspace で Biome が使えるか試したい

あたりが動機だったが試せてよかった。

Dev Container でローカルの事情に引っ張られることもなくなってきたので、今後は困ったことがない限り Corepack 使っていく。

Biome は ESLint/Prettier に比べて革命的に設定が楽だし管理用ファイルも減るのでとてもいい。

NextAuth.js は使いやすそう、まだ「使いやすそう」というところまでしか触ってないけど。次は WebAuthn 試したい。

---

主目的ではないが

- Next.js 15 で設定ファイルを TS で書ける（next.config.ts）ようになることに気付いて試せた
- Zod で Next.js で環境変数を型安全にする方法を試せた
- Dev Container のようなプロジェクトごとのエディタ設定に慣れて、VSCode から不要なユーザーレベルの設定を削除できた

など副次的なメリットもあった。

---

惜しい点としては

- 本当は Auth.js （next-auth@beta）を使いたかったのだが、最近のアップデート？でランタイムエラーのイシューが上がっていて使えなかった
- Biome だと Tailwind CSS 周りのサポートは Prettier にまだ追いついていない
- Next.js 15, React 19 を canary で使ったが特に新しい機能などは試せていない

などがあった。次の機会にまた試す。
