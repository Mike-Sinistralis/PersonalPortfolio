hibernate
        {
//    format_sql = true
            cache.use_second_level_cache = true
            cache.use_query_cache = true
            cache.provider_class = "net.sf.ehcache.hibernate.EhCacheProvider"
        }

environments
        {
            development
                    {
                        dataSource
                                {
                                    pooled = true
                                    driverClassName = "org.postgresql.Driver"
                                    username = "postgres"
                                    password = "odie1234"
                                    dialect = "org.hibernate.dialect.PostgreSQLDialect"
                                    url = "jdbc:postgresql://localhost:5432/portfolio?autoreconnect=true"
//            loggingSql = true

                                    properties
                                            {
                                                maxActive = 100
                                                maxIdle = 10
                                                minIdle = 10
                                                initialSize = 25
                                                minEvictableIdleTimeMillis = 60000
                                                timeBetweenEvictionRunsMillis = 60000
                                                numTestsPerEvictionRun = 3
                                                maxWait = 10000

                                                testOnBorrow = true
                                                testWhileIdle = true
                                                testOnReturn = false

                                                validationQuery = "SELECT 1"
                                            }
                                }
                    }
        }