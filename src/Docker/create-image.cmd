docker build --no-cache -f SQL\Dockerfile.PostgreSql -t iss14/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t iss14/app ../..
